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
  const regex1 = /\d+ plug \d+/g;
  new RegExp(regex1, 'g')
  let match;
  
  if (match = regex1.exec(query)){
    return (match[0] + match[1]);
  }

  return "";
}
