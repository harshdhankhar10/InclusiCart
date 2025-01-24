import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users, { status: 200 }); 
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 }); 
  }
}

export async function POST(req: NextRequest): Promise<NextResponse> {
try {
    const body = await req.json();
    const { firstName, lastName, email, password } = body;
    const isUserExist = await prisma.user.findUnique({
        where: {
            email: email,
        },
    });
    if (isUserExist) {
        return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }
    const user = await prisma.user.create({
        data: {
            firstName,
            lastName,
            email,
            password,
        },
    });

    

    return NextResponse.json({ message: "User created successfully" }, { status: 201 });
    
} catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
}
}

export async function PUT(req: NextRequest): Promise<NextResponse> {
    try {
        const { id, firstName, lastName, email, password } = await req.json();
        const user = await prisma.user.update({
            where: {
                id: id,
            },
            data: {
                firstName,
                lastName,
                email,
                password,
            },
        });

        return NextResponse.json({ message: "User updated successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error updating user:", error);
        return NextResponse.json({ error: "Failed to update user" }, { status: 500 });
    }
}


export async function DELETE(req: NextRequest): Promise<NextResponse> {
    try {
        const { id } = await req.json();
        await prisma.user.delete({
            where: {
                id: id,
            },
        });

        return NextResponse.json({ message: "User deleted successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error deleting user:", error);
        return NextResponse.json({ error: "Failed to delete user" }, { status: 500 });
    }
}