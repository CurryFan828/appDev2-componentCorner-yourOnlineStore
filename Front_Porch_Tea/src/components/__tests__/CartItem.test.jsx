// src/components/__tests__/CartItem.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import CartItem from "../CartItem";

describe("CartItem Component", () => {
  const mockRemove = vi.fn();

  const item = {
    cartId: "123",
    id: 1,
    name: "Sweet Tea",
    price: 3.99,
    image: "https://southernbite.com/wp-content/uploads/2024/08/Southern-Sweet-Tea.jpg",
  };

  beforeEach(() => {
    mockRemove.mockClear();
    render(<CartItem item={item} removeFromCart={mockRemove} />);
  });

  it("renders item name", () => {
    expect(screen.getByText(item.name)).toBeInTheDocument();
  });

  it("calls removeFromCart when Remove button is clicked", () => {
    const removeButton = screen.getByText("Remove"); // matches the button text
    fireEvent.click(removeButton);
    expect(mockRemove).toHaveBeenCalledWith(item.cartId);
  });
});
