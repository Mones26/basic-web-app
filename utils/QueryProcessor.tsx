export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("andrew id")){
    return ("jageitos");
  }
  if (query.toLowerCase().includes("name")){
    return ("Juan");
  }

  const regex = /(\d+)\s+plus\s+(\d+)/i;
  const match = query.match(regex);
  if (match) {
    const num1 = parseInt(match[1]);
    const num2 = parseInt(match[2]);
    const sum = (num1) + (num2);
    return(String(sum));
  }
  const regex4 = /(\d+)\s+minus\s+(\d+)/i;
  const match4 = query.match(regex4);
  if (match4) {
    const num1 = parseInt(match4[1]);
    const num2 = parseInt(match4[2]);
    const sum = (num1) - (num2);
    return(String(sum));
  }
  const regex2 = /(\d+)\s+multiplied\s+by\s+(\d+)/i;
  const match2 = query.match(regex2);
  if (match2) {
    const num1 = parseInt(match2[1]);
    const num2 = parseInt(match2[2]);
    const sum = (num1) * (num2);
    return(String(sum));
  }

  const regex3 = /Which of the following numbers is the largest:\s+(\d+),\s+(\d+),\s+(\d+)/i;
  const match3 = query.match(regex3);
  if (match3) {
    const num1 = parseInt(match3[1]);
    const num2 = parseInt(match3[2]);
    const num3 = parseInt(match3[3]);
    const max = Math.max(num1, num2, num3);
    return(String(max));
  }

  return "";
}
