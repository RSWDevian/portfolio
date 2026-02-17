export interface BlogItem {
  name: string;
  slug: string;
}

export const blogs: BlogItem[] = [
  { name: "New to Blockchain? Lets get clear with the concepts!", slug: "blockchain-prototype-using-rust" },
  { name: "Let's Build a Minimal Blockchain from Scratch", slug: "building-a-utxo-store-in-sled" },
  { name: "ED25519 Transactions Explained", slug: "ed25519-transactions-explained" },
]