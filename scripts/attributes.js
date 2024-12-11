Attribute.add("charcoal");
Events.on(ContentInitEvent, e => {
    Vars.content.block("acid-soil").attributes.set(Attribute.get("charcoal"), 1);
})
