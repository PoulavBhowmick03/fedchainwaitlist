import mongoose from "mongoose";
import { NextResponse } from "next/server";
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mydatabase';

let isConnected = false;

async function connectToDatabase() {
  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    isConnected = true;
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    isConnected = false;
  }
}

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  wallet: {
    type: String,
    required: true,
  }
});

const User = mongoose.models.User || mongoose.model('User', schema);

export async function POST(request: Request) {
  try {
    await connectToDatabase();
    if (!isConnected) {
      return NextResponse.json({ error: 'Failed to connect to database' }, { status: 500 });
    }

    const { name, email, wallet } = await request.json();
    if (!name || !email || !wallet) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const user = new User({ name, email, wallet });
    await user.save();

    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    await connectToDatabase();
    if (!isConnected) {
      return NextResponse.json({ error: 'Failed to connect to database' }, { status: 500 });
    }

    const users = await User.find({});
    return NextResponse.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}
