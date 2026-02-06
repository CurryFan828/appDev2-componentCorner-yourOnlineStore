// src/__tests__/App.test.jsx
import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../../App";

// Mock localStorage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
    removeItem: (key) => {
      delete store[key];
    },
  };
})();
Object.defineProperty(window, "localStorage", { value: localStorageMock });

describe("App Component Cart State and localStorage", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("renders App component", () => {
    render(<App />);
    expect(screen.getByText(/Welcome to Front Porch Tea/i)).toBeInTheDocument();
    expect(screen.getByText(/Our Fan Favorite Teas/i)).toBeInTheDocument();
  });

  it("loads cart from localStorage on startup", () => {
    const storedCart = [
      { id: 1, name: "Sweet Tea", price: 3.99, cartId: "abc123" },
    ];
    localStorage.setItem("cart", JSON.stringify(storedCart));

    render(<App />);
    expect(screen.getByText("1")).toBeInTheDocument(); // Cart count in header
  });

  it("adds item to cart and updates UI and localStorage", () => {
    render(<App />);

    // Add first two products
    const addButtons = screen.getAllByText(/Add to Cart/i);
    fireEvent.click(addButtons[0]); // Sweet Tea
    fireEvent.click(addButtons[1]); // Strawberry Lemonade Tea

    // Cart count should update
    expect(screen.getByText("2")).toBeInTheDocument();

    // LocalStorage should have 2 items
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    expect(storedCart.length).toBe(2);
    expect(storedCart[0].name).toBe("Sweet Tea");
    expect(storedCart[1].name).toBe("Strawberry Lemonade Tea");
  });

  it("removes item from cart and updates UI and localStorage", () => {
    render(<App />);

    // Add first two products
    const addButtons = screen.getAllByText(/Add to Cart/i);
    fireEvent.click(addButtons[0]);
    fireEvent.click(addButtons[1]);

    // Open cart dropdown by clicking the cart icon
    const cartIcon = screen.getByText("2"); // Cart count is clickable
    fireEvent.click(cartIcon);

    // Remove the first item
    const removeButtons = screen.getAllByText("Remove"); // Assuming CartItem renders this
    fireEvent.click(removeButtons[0]);

    // Cart count should be 1
    expect(screen.getByText("1")).toBeInTheDocument();

    // LocalStorage should have 1 item left
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    expect(storedCart.length).toBe(1);
    expect(storedCart[0].name).toBe("Strawberry Lemonade Tea");
  });
});
