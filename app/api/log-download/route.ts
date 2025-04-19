import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import clientPromise from '@/lib/mongodb';

export async function POST(req: Request) {
  try {
    // Verify the user is authenticated
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    // Get request body
    const body = await req.json();
    const { projectId, email } = body;
    
    if (!projectId) {
      return NextResponse.json(
        { error: 'Project ID is required' },
        { status: 400 }
      );
    }
    
    // Connect to MongoDB and log the download
    const client = await clientPromise;
    const db = client.db("portfolio");
    
    await db.collection("downloads").insertOne({
      projectId,
      email: email || session.user.email,
      userId: session.user.id,
      timestamp: new Date()
    });
    
    return NextResponse.json(
      { success: true, message: 'Download logged successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error logging download:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}