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
    const sum = num1 + num2;
    return('${sum}');
  }

  return "";
}
