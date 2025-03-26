import {create} from "zustand/react";
import {ITicket} from "@/models/Ticket.model.ts";
import {IUser} from "@/models/User.model.ts";

interface ITicketStore {
    tickets: ITicket[],
    setTickets: (tickets: ITicket[]) => void,
    user: IUser | undefined,
    setUser: (user: IUser) => void
}

export const useTicketStore = create<ITicketStore>(
    (set) => ({
        tickets: [],
        setTickets: (tickets: ITicket[]) => {set({tickets})},
        user: undefined,
        setUser: (user) => {set({user})}
    }));