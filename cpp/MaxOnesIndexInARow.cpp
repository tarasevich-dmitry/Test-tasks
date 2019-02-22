#include "stdafx.h"

#include<iostream>
using namespace std;

int maxOnesIndex(bool arr[], int n)
{
	int max_count = 0;  
	int max_index; 
	int prev_zero = -1;  
	int prev_prev_zero = -1; 

							
	for (int curr = 0; curr<n; ++curr)
	{
	
		if (arr[curr] == 0)
		{

			if (curr - prev_prev_zero > max_count)
			{
				max_count = curr - prev_prev_zero;
				max_index = prev_zero;
			}


			prev_prev_zero = prev_zero;
			prev_zero = curr;
		}
	}


	if (n - prev_prev_zero > max_count)
		max_index = prev_zero;

	return max_index;
}


int maxOnesIndex1(bool arr[], int n)
{

	int prevZeroPos = 0;
	int oldOneCnt = 0;
	int newOneCnt = 0;
	int longestChainOfOnes = 0;
	int longestChainPos = 0;
	int i;

	for (i = 0; i<n; i++)
	{

		if (arr[i] != 0)
		{
			oldOneCnt++;
		}
		else    
		{
			prevZeroPos = i;
			newOneCnt = 0;

			i++;

			while (i<n && arr[i] == 1)
			{
				i++;
				newOneCnt++;
			}

			if ((oldOneCnt + newOneCnt) > longestChainOfOnes)
			{
				longestChainOfOnes = oldOneCnt + newOneCnt + 1;
				longestChainPos = prevZeroPos;
			}

			oldOneCnt = 0;
			i = prevZeroPos;

		}

	}

	if ((oldOneCnt + newOneCnt) > longestChainOfOnes)
	{
		longestChainOfOnes = oldOneCnt + newOneCnt + 1;
		longestChainPos = prevZeroPos;
	}

	return longestChainPos;
}


int main()
{
	bool arr[] = { 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1 };
	int n = sizeof(arr) / sizeof(arr[0]);
	cout << "Index of 0 to be replaced is "
		<< maxOnesIndex1(arr, n) << endl;
	return 0;
}
