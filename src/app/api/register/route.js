import dbConnect from "@/lib/dbConnect";

const registerUser = async (payload) => {
    const { name, email, password } = payload;
    if (!name || !email || !password) {
        return null;
    }

    const usersCollection = dbConnect("users");
    const user = await usersCollection.findOne({ email: payload.email });

    if (!user) {
        const result = await usersCollection.insertOne(payload);
        return result;
    }

    return null;
};

export async function POST(request) {
    try {
        const payload = await request.json();
        const result = await registerUser(payload);

        if (!result) {
            return Response.json(
                { message: "User already exists or required information is missing" },
                { status: 400 }
            );
        }

        return Response.json(
            {
                message: "User registered successfully",
                userId: result.insertedId,
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("Registration error:", error);

        return Response.json(
            { message: "Registration failed" },
            { status: 500 }
        );
    }
}
