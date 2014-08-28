Skill-Based Resource Assignment
===============================

Skill based resource assignment algorithm and RESTful API implementation in NodeJS


Example of Algorithm:
=====================

Sample Set's Weightings...

R = Resource
S = Skill
E = Event

R1
  S1: 0.2
  S2: 0.7
  S3: 0.6
R2
  S1: 0.1
  S2: 0.9
  S3: 0.8
R3
  S1: 0.4
  S2: 0.3
  S3: 0.8

E1-1
  S1: 0.5
E2-1
  S1: 0.6
  S2: 0.3
E3-1
  S1: 0.3
  S3: 0.5

Score Calculation:
1. If weight of a skill of the resource is greater than or equal to the weight of the skill against the event then set to 1 for the match; else
2. If weight of a skill of the resource is less than the weight of the skill against the event then set to Resource-Skill-Weight / Event-Skill-Weight
3. When calculating sub-scores only calculate one per event skill. Leave out unused resource skills
4. Add the sub-score for each skill-match up
5. Divide by number of skill matches to get assignment score

1. Calculate Assignment Scores for R1
   (D) R1-E1-1: (0.2 / 0.5) / 1 = 0.4
   (D) R1-E2-1: ((0.2 / 0.6) + (0.3 / 0.3)) / 2 = 1.33 / 2 = 0.67
   (D) R1-E3-1: ((0.2 / 0.3) + (0.5 / 0.5)) / 2 = 1.67 / 2 = 0.835
2. Calculate Assignment Scores for R2. 
   (D) R2-E1-1: (0.1 / 0.5) / 1 = 0.2
   (D) R2-E2-1: ((0.1 / 0.6) + (0.3 / 0.3)) / 2 = (0.17 + 1) / 2 = 0.585
   (D) R2-E3-1: ((0.1 / 0.3) + (0.5 / 0.5)) / 2 = (0.33 + 1) / 2 = 0.67 
3. Calculate Assignment Scores for R3.
   (D) R3-E1-1: (0.4 / 0.5) / 1 = 0.8
   (D) R3-E2-1: ((0.4 / 0.6) + (0.3 / 0.3)) / 2 = (0.67 + 1) / 2 = 0.835
   (D) R3-E3-1: ((0.2 / 0.3) + (0.5 / 0.5)) / 2 = (0.67 + 1) / 2 = 0.835

4. Rank scores (best at top):
   R1-E3-1: 0.835
   R3-E2-1: 0.835
   R3-E3-1: 0.835
   R3-E1-1: 0.8
   R1-E2-1: 0.67
   R2-E3-1: 0.67
   R2-E2-1: 0.585
   R1-E1-1: 0.4
   R2-E1-1: 0.2

5. Assign resources, consuming resources and events from top down:
   R1-E3-1: 0.835
   R3-E2-1: 0.835
   R2-E2-1: 0.585

   Max Score: (0.835 + 0.835 + 0.585) / 3 =  0.762
