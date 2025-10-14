export async function POST(req) {
  try {
    const { amount, currency = "USD" } = await req.json();

    if (!amount) {
      return new Response(JSON.stringify({ error: "Amount required" }), {
        status: 400,
      });
    }

    const res = await fetch(
      `${process.env.BTCPAY_HOST}/api/v1/stores/${process.env.BTCPAY_STORE_ID}/invoices`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${process.env.BTCPAY_API_KEY}`,
        },
        body: JSON.stringify({
          amount,
          currency,
          metadata: { label: "BTC Shule Donation", source: "website" },
        }),
      }
    );

    const text = await res.text();

    if (!res.ok) {
      console.error("BTCPay error:", text);
      return new Response(JSON.stringify({ error: text }), { status: 500 });
    }

    const data = JSON.parse(text);

    const checkoutLink = `${process.env.BTCPAY_HOST}/invoice?id=${data.id}`;
    return new Response(JSON.stringify({...data, checkoutLink}), { status: 200 });
  } catch (err) {
    console.error("Server error:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
