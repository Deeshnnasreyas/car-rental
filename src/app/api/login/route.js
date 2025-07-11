const users = [
  { id: 1, username: "admin", password: "admin" },
  { id: 2, username: "user", password: "user" },
];

export async function POST(req) {
  try {
    const body = await req.json();
    const { username, password } = body;
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (!user) {
      return new Response(JSON.stringify({ message: "Invalid credentials" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }
    const token = `mock-token-${user.id}-${Date.now()}`;

    return new Response(
      JSON.stringify({
        message: "Login successful",
        token,
        user: { id: user.id, username: user.username },
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
