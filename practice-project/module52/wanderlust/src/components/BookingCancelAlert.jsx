"use client";

import { AlertDialog, Button } from "@heroui/react";
import { Trash2Icon } from "lucide-react";
import toast from 'react-hot-toast';

export function BookingCancelAlert({ bookingId, destinationName }) {

    const handleDeleteBooking = async () => {
        console.log(bookingId);
        const response = await fetch(`http://localhost:8000/booking/${bookingId}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
            },
        });
        const data = await response.json();

        console.log(data);

        toast.success("Booking canceled");
    }

    return (
        <AlertDialog>
            <Button className="rounded-none border-red-500 text-red-500" variant='outline'><Trash2Icon></Trash2Icon> Cancel</Button>

            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete booking permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete the booking for <strong>{destinationName}</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handleDeleteBooking} slot="close" variant="danger">
                                Delete Booking
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}