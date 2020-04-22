import { getEndedAuctions } from '../lib/getEndedAuctions';

async function processAuctions(event, context) {
  const auctionsToClose = await getEndedAuctions();
  console.log(auctionsToClose);
}

export const handler = processAuctions;