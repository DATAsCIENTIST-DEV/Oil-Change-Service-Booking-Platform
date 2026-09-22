export type ServiceStatus = 'scheduled'|'in-progress'|'completed'|'cancelled';
export type Service = { id:string; name:string; description:string; price:number; duration:string; popular?:boolean; features:string[] };
export type Booking = { id:string; serviceId:string; serviceName:string; restaurant:string; date:string; time:string; address:string; notes:string; status:ServiceStatus; createdAt:string };
export type Notification = { id:string; title:string; body:string; time:string; read:boolean; type:'booking'|'system'|'reminder' };
