import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import FormComponent from '../components/FormComponent';
import { useForm } from '@formspree/react';

jest.mock('@formspree/react', () => ({
  useForm: jest.fn(),
}));

describe('FormComponent', () => {
  it('renders the form and handles submission successfully', async () => {
    (useForm as jest.Mock).mockReturnValue([
      { submitting: false, succeeded: false, errors: [] },
      jest.fn(),
    ]);

    render(<FormComponent />);

    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/How did you know Susan?/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByLabelText(/How did you know Susan?/i), { target: { value: 'friend' } });
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Susan was a great friend.' } });

    fireEvent.click(screen.getByText(/Submit/i));

    await waitFor(() => {
      expect(useForm).toHaveBeenCalled();
    });
  });

  it('displays a success message when form is successfully submitted', async () => {
    (useForm as jest.Mock).mockReturnValue([
      { submitting: false, succeeded: true, errors: [] },
      jest.fn(),
    ]);

    render(<FormComponent />);

    expect(screen.getByText(/Thank you for your submission/i)).toBeInTheDocument();
  });
});