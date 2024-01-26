# Doot Example Contract Interactions

Guide to help people understand how to use the `@doot-oracles/client` npm package with their smart contract.

## Get Started

1. Clone the repository

   `git clone https://github.com/Doot-Foundation/doot_example.git`

2. Move into the directory and install the packages. This includes the `@doot-oracles/client` package by default.

   `cd doot_example/`

   `npm install`

3. Visit https://doot.foundation/dashboard and after logging in click on your API key to copy it to the clipboard. In your cloned project you will see a `.env.example`, using the same contents create a new `.env` file and paste the API key after `DOOT_API_KEY=`.
   The final result should be a new .env file with your API key.

4. Build the project
   `npm run build`

5. Run the example
   `node build/src/interact.js`

### The Result?

You will be presented with the current exchange rates between `$MINA` and `$ETH`.
