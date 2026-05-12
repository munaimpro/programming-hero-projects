"use client";

import { AlertDialog, Button } from "@heroui/react";
import { Trash2 } from "lucide-react";

export function DeleteModal({ destination }) {

    const { destinationName, _id } = destination;

    const handleDelete = async () => {
        const response = await fetch(`http://localhost:8000/destination/${_id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        });
        const data = await response.json();

        console.log(data);
    }

    return (
        <AlertDialog>
            <Button className="flex float-end gap-1 bg-transparent text-black btn-block"><Trash2></Trash2> Delete</Button>

            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete destination permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete the destination <strong>{destinationName}</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button type="submit" onClick={handleDelete} slot="close" variant="danger">
                                Delete Destination
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}