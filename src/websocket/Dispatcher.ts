import {useTicketStore} from "@/store/TicketStore.ts";
import {IUser} from "@/models/User.model.ts";
import {ITicket} from "@/models/Ticket.model.ts";
import {IMessage} from "@/models/IMessage.ts";


class Dispatcher {
    static dispatch(message: IMessage) {
        switch (message.type) {
            case "LOGIN":
                useTicketStore.getState().setUser(message.payload as IUser);
                console.log(message.payload as IUser);
                break;

            case "LOGOUT":
                useTicketStore.getState().setUser(undefined);
                break;

            case "ADMIN_LIST":
                useTicketStore.getState().setAdmins(message.payload as IUser[]);
                break;

            case "TICKET_LIST":
                useTicketStore.getState().setTickets(message.payload as ITicket[]);
                break;

            default:
                console.log(`Type ${message.type} invalid`);
                break;
        }
    }
}

export default Dispatcher;