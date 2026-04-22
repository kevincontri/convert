# Convert

A minimal currency converter that converts foreign currencies into Brazilian Reais (BRL).

[Visit The Site!](https://kevincontri.github.io/convert/) <br>

## Project Demo:

<div align="center">
  <h3>Project Video Demo:</h3>
  <video src="https://github.com/user-attachments/assets/15df82b5-70ea-44e7-b188-23e15943c286" width="640" controls >
    Seu navegador não suporta vídeo.
  </video>
</div>

## Features

- Converts USD, EUR, GBP, RUB, and CNY to BRL
- Numeric-only input validation in real time
- Displays the exchange rate and the converted total
- No dependencies — pure HTML, CSS, and vanilla JavaScript

## Usage

Open `index.html` in a browser, enter an amount, select a currency, and click **Convert to Brazilian Reais**.

> Exchange rates are hardcoded and do not reflect live market values.

## Stack

- HTML5
- CSS3
- Vanilla JavaScript

# Future Improvements:

- Live exchange rates — Fetch rates from an API instead of hardcoded constants
- Bidirectional conversion — Let users convert from BRL to a foreign currency as well, or freely swap the direction with a toggle button.
- Input formatting — Format the amount field with thousand separators as the user types (e.g. 1000 → 1.000), matching the Brazilian number format already used in the output.
- Conversion history — Add a small in-session log of recent conversions displayed below the result, so the user can compare rates without redoing each calculation manually.
- Add More currencies
