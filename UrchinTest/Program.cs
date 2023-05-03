namespace UrchinTest
{
    internal class Program
    {
        public static int MinMeetings(int desiredColor, int[] population)
        {
            int totalHedgehogs = population[0] + population[1] + population[2];
            int desiredHedgehogs = population[desiredColor];
            int currentColor = -1;
            int meetings = 0;

            while (currentColor != desiredColor)
            {
                // Check if all hedgehogs are already the desired color
                if (desiredHedgehogs == totalHedgehogs)
                {
                    return meetings;
                }

                // Check if it's impossible to reach the desired color
                if (desiredHedgehogs == 0 || totalHedgehogs - desiredHedgehogs < 2)
                {
                    return -1;
                }

                // Determine the most common color among the current hedgehogs
                currentColor = GetMostCommonColor(population);

                // Change the color of the hedgehogs to the third color
                for (int i = 0; i < population.Length; i++)
                {
                    if (i != currentColor)
                    {
                        population[i] += population[currentColor];
                        population[currentColor] = 0;
                    }
                }

                // Update the total number of hedgehogs and the number of desired hedgehogs
                totalHedgehogs -= population[currentColor];
                desiredHedgehogs -= population[currentColor];
                population[currentColor] = 0;

                // Increment the number of meetings
                meetings++;
            }

            return meetings;
        }

        private static int GetMostCommonColor(int[] population)
        {
            int maxHedgehogs = 0;
            int mostCommonColor = -1;

            for (int i = 0; i < population.Length; i++)
            {
                if (population[i] > maxHedgehogs)
                {
                    maxHedgehogs = population[i];
                    mostCommonColor = i;
                }
            }

            return mostCommonColor;
        }

        static void Main(string[] args)
        {
            int[] population = { 8, 1, 9 };
            int desiredColor = 1;
            int numMeetings = MinMeetings(desiredColor, population);
            Console.WriteLine(numMeetings); // виводимо мінімальну кількість зустрічей (три, при такій популяції)
        }
    }
}