import type { NextConfig } from "next";

import { withLingo } from '@lingo.dev/compiler';
const nextConfig: NextConfig = {
  /* config options here */
};

export default withLingo(nextConfig);
