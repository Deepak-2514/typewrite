"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const userStore = create(
  persist(
    (set) => ({
      count: 0,
      cart: [],
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () =>
        set((state) => ({ count: state.count === 0 ? 0 : state.count - 1 })),
      putInCart: (product) =>
        set((state) => ({
          cart: [...state.cart, { product, count: state.count }],
        })),
    }),

    {
      name: "userStore",
    },
  ),
);

export default userStore;
