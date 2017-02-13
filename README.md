# 98point6 Drop Token

## Problem Statement
We would like you to develop an application that allows a player to enjoy a game of 9dt, or 98point6 Drop Token, against a service that we have made. You can design the app however you think is best. We're not going to judge how pretty it is, but we are looking for developers who can put together a good UX without oversight.

## Rules of 9dt
Drop Token takes place on a 4x4 grid. A token is dropped along a column (labeled 0-3) and said token goes to the lowest unoccupied row of the board. A player wins when they have 4 tokens next to each other either along a row, in a column, or on a diagonal. If the board is filled, and nobody has won then the game is a draw. Each player takes a turn, starting with player 1, until the game reaches either win or draw. If a player tries to put a token in a column that is already full, that results in an error state, and the player must play again until they play a valid move.

## Example Game
![samplegame](https://github.com/rafastealth/9dt-mobile/blob/master/sample_game.png)

## Our 9dt service
We've designed a not-very-smart 9dt playing service. It takes a GET param called "moves" that is a JSON array of all the moves that have taken place from the beginning of the game and returns that array plus it's move. It will 400 when it's given an invalid set of moves - for example if a column has too many tokens in it - but it can not tell if the player has won or lost.

Here is an example call for a game where player 1 went in column 0, 3 and 3 and player 2 went in column 0 and 2: 
[https://w0ayb2ph1k.execute-api.us-west-2.amazonaws.com/production?moves=[0,0,3,2,3]](https://w0ayb2ph1k.execute-api.us-west-2.amazonaws.com/production?moves=%5B0,0,3,2,3%5D)

## Requirements
1. The app must allow the player to choose whether they want to go first, or if they want our service to go first.
1. If there is a win on either side, the app must display who won and let the player play again.
1. If the board is full, the app must tell the user the game is a draw and let the player play again.
1. There must be unit tests.
1. Think about ways this game could be extended in the future.
