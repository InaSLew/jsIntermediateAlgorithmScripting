/**
 * Sum All Primes
 * Sum all the prime numbers up to and including the provided number.
 * A prime number is defined as a number greater than one and having only two divisors, one and itself.
 * For example, 2 is a prime number because it's only divisible by one and two.
 * The provided number may not be a prime.
 */

 // The following solution is translated from the python snippet on https://www.geeksforgeeks.org/prime-numbers/

 function sumPrimes(num) {
    let sieve = [], i, p, j, y, sum, primes = [];
    for (i = 0; i <= num; i += 1) {
      primes.push(true);
    }
    p = 2
    while(p * p <= num) {
      // If primes[p] is not changed, then it is a prime
      if (primes[p] === true) {
        // Update all multiples of p
        for (j = p * p; j < num + 1; j += p) {
          primes[j] = false;
        }
      }
      p += 1;
    }
    sum = 0;
    for( y = 2; y <= num; y += 1) {
      if (primes[y]) sum += y
    }
    return sum;
  }