export async function GET() {
  return Response.json({
    onchain: process.env.DONATION_ADDRESS_ONCHAIN,
    lightning: process.env.DONATION_ADDRESS_LIGHTNING,
    liquid: process.env.DONATION_ADDRESS_LIQUID,
  });
}