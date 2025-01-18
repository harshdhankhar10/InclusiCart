import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, password } = await req.json();
    
    if (!firstName || !lastName || !email || !password) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    const exists = await prisma.user.findUnique({
      where: {
        email
      }
    });

    if (exists) {
      return new NextResponse("User already exists", { status: 400 });
    }

    const hashedPassword = await hash(password, 10);

    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword
      }
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log("Error while registering user", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}