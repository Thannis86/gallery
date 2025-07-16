import DataBaseAdd from "../../../components/Images_Upload/DataBaseAdd";

export async function POST(req) {
  try {
    const { url } = await req.json();

    if (!url) {
      return new Response(JSON.stringify({ error: "No URL provided" }), {
        status: 400,
      });
    }

    await DataBaseAdd(url);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Failed to save URL to DB:", error);
    return new Response(JSON.stringify({ error: "Failed to save to DB" }), {
      status: 500,
    });
  }
}
