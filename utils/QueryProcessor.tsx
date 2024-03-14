function isPrime(num : number) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}


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
  const regex5 = /(\d+)\s+plus\s+(\d+)\s+plus\s+(\d+)/i;
  const match5 = query.match(regex5);
  if (match5) {
    const num1 = parseInt(match5[1]);
    const num2 = parseInt(match5[2]);
    const num3 = parseInt(match5[3]);
    const sum = (num1) + (num2) + (num3);
    return(String(sum));
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

  const regex6 = /Which of the following numbers are primes:\s+(\d+),\s+(\d+),\s+(\d+)\s+,\s+(\d+),\s+(\d+)/i;
  const match6 = query.match(regex6);
  if (match6) {
    const num1 = (parseInt(match6[1]));
    const num2 = (parseInt(match6[2]));
    const num3 = (parseInt(match6[3]));
    const num4 = (parseInt(match6[4]));
    const num5 = (parseInt(match6[5]));

    if (isPrime(parseInt(match6[1]))){
      return String(num1);
    }
    else if (isPrime(parseInt(match6[2]))){
      return String(num2);
    }else if (isPrime(parseInt(match6[3]))){
      return String(num3);
    }
    else if (isPrime(parseInt(match6[4]))){
      return String(num4);
    }if (isPrime(parseInt(match6[5]))){
      return String(num5);
    }
  }

  const regex7 = /What is (\d+) to the power of (\d+))?/i;
  const match7 = query.match(regex7);
  if (match7) {
    const num1 = parseInt(match7[1]);
    const num2 = parseInt(match7[2]);
    return(String(Math.pow(num1, num2)));
  }

  return "";
}
