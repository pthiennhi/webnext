import React from "react"
import {HubConnectionBuilder, HttpTransportType, HubConnection}  from "@microsoft/signalr";

export const WS_URL = "wss://iot.wyvernp.id.vn/hubs/data-report"
export const SocketContext = React.createContext<HubConnection | null>(null);

export function createSocketConnection(url = WS_URL , serialId: string) {
  const socket = new HubConnectionBuilder()
    .withUrl(`${url}?searialId=${serialId}`, {
      skipNegotiation: true,
      transport: HttpTransportType.WebSockets,
    })
    .withAutomaticReconnect()
    .build();

  return socket;
}