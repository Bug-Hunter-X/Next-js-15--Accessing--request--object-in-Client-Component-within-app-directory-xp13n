# Next.js 15: Accessing 'request' in Client Components

This repository demonstrates a potential error in Next.js 15's `app` directory when trying to access the `request` object within a client component.  This is a common mistake when transitioning from pages-based routing.

## Problem

Directly accessing the `request` object (which holds information about the HTTP request) inside client components leads to runtime errors because client components execute in the browser, not on the server.

## Solution

The solution is to use server components or server actions to fetch data and pass it to the client components. This ensures that the `request` object is only used in the appropriate server-side context.