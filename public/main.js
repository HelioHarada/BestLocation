var conversationalForm = new cf.ConversationalForm({
    formEl: document.getElementById("form"),
    context: document.getElementById("cf-context"),
    robotImage: "https://www.clipartmax.com/png/middle/144-1442578_flat-person-icon-download-dummy-man.png",
    eventDispatcher: dispatcher,
    preventAutoFocus: true,
    flowStepCallback: function(dto, success, error) {
      success();
    },
    submitCallback: function() {
      // remove Conversational Form
      alert("You made it!");
      console.log("Form submitted...");
    }
  });
