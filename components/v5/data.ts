export const builderModules=[
  {id:"navigation",label:"Navigation",short:"NAV",description:"Application structure"},
  {id:"commerce",label:"Commerce",short:"COMMERCE",description:"Transactional capability"},
  {id:"identity",label:"Identity",short:"IDENTITY",description:"Account and access state"},
  {id:"notifications",label:"Notifications",short:"NOTIFY",description:"Event-driven messaging"},
] as const;

export type BuilderModuleId=(typeof builderModules)[number]["id"];

export const applicationIdentities=[
  {name:"Bawarchi",image:"/assets/app-identities/bawarchi.png"},
  {name:"Desi District",image:"/assets/app-identities/desi-district.png"},
  {name:"Dining product",image:"/assets/app-identities/fork-and-spoon.png"},
  {name:"High5",image:"/assets/app-identities/high5.png"},
  {name:"HSB",image:"/assets/app-identities/hsb.png"},
  {name:"G product",image:"/assets/app-identities/g-mark.png"},
  {name:"Petal product",image:"/assets/app-identities/petal-mark.png"},
] as const;

export const productionJourney=[
  {state:"DISCOVER",title:"Find the service area",caption:"Address search and location suggestions",image:"/assets/fb/address-search.png",focus:"ADDRESS RESOLUTION"},
  {state:"LOCATION",title:"Confirm the address",caption:"Address, unit and delivery context",image:"/assets/fb/address-entry.png",focus:"FORM STATE"},
  {state:"STORE",title:"Choose the right store",caption:"Availability, distance and opening state",image:"/assets/fb/store-selection.png",focus:"AVAILABILITY"},
  {state:"SCHEDULE",title:"Set the handoff",caption:"Store, location and delivery time",image:"/assets/fb/delivery-time.png",focus:"TIME SLOTS"},
  {state:"DETAILS",title:"Make location precise",caption:"Map-assisted address details and labels",image:"/assets/fb/address-details.png",focus:"MAP + INPUT"},
  {state:"CART",title:"Review the order",caption:"Items, instructions, tip and fulfilment summary",image:"/assets/fb/cart.png",focus:"CART STATE"},
  {state:"ORDERS",title:"Keep order history clear",caption:"Pickup and delivery records in one view",image:"/assets/fb/orders.png",focus:"ORDER STATE"},
  {state:"TRACK",title:"Open live tracking",caption:"Order details and delivery handoff",image:"/assets/fb/track-order.png",focus:"TRACKING LINK"},
  {state:"COMPLETE",title:"Close the loop",caption:"Delivered state, map and location details",image:"/assets/fb/delivered.png",focus:"FINAL STATE"},
] as const;
