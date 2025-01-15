## Explaination

    This problem describes a voting system in a competitive environment where two parties, Radiant (R) and Dire (D), take turns either banning the other party's senators or announcing victory when all remaining senators are from their party.

## Key Points

1. Input:
    * A string <senate> where each character represents a senator:
        * 'R' for Republican
        * 'D' for Democrat
    * The string represents the order of senators participating in the voting process.
2. Actions:
    * Each senator can:
        1. Ban a senator or Remove one senator from the opposing party.
        2. Declare victory: Declare victory if remaining senators are from the same party.
3. Procedure
    * Voting proceeds in a round based manner
        * Senators start from the first senator in the string and proceed sequentially
        * Senators who have been voted off are skipped
    * The process repeats until only one process remains
4. Outcome:
    * If all remaining senators belong to Republican, return "Republican"
    * If all remaining senators belong to Democrat, return "Democrat"

## Example Walkthrough

### Example 1

Input: Senate = "RD"

1. First Round:
    * The first senator (R) bans the second senator (D)
    * Only (R) remains
2. Republican Party has the victory

Output: <Republican>

### Example 2

Input: Senate = "RDD"

1. First Round:
    * The first senator (R) bans the second senator (D)
    * The updated sequence is (D)
2. The remaining (D) senator announces victory.

Output: <Democrat>

## What is being asked:

Simulate the voting precedure:

1. Alternate turns for senators, starting with the first senator in the input string.
2. Remove senators from the opposing party.
3. The remainder determines which party wins the vote.

## Strategy

1. Use a queue to represent the senators and their order in the voting process.
    * For example, <senate = "RDD"> is represented as a queue: [R, D, D]
2. As each senator takes their turn:
    * If they are still active, they ban the next available senator from the opposing party.
3. Keep track of the number of active senators for each party
4. Stop when all senators belong to the same party.

## How to solve it:

1. Create 2 queues
    * <republicanQueue> to store indices of 'R' seantors
    * <democratQueue> to store the indices of 'D' senators
2. Populate the queues with the indices of 'R' and 'D' in the input string
3. Process the queues:
    * Compare the front elements of both queues
    * the senator with the earlier turn (smaller index) bans the other and reinstates them selves into the queue with an updated index, simulating a circular order.
4. Continue until one queue is empty.
5. If <republicanqQueue> is empty, return <Democrat>. If <democratQueue> is empty, return <Republican>.
