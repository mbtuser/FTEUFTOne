AIUtil.SetContext WpfWindow("wpftypename:=window", "regexpwndtitle:=OpenText MyFlight Sample Application", "devname:=OpenText MyFlight Sample Application")
AIUtil.FindTextBlock("SEARCH ORDER").Click
'AIUtil("text_box", "haSMmit").Type Parameter("OrderNumber")
AIUtil("radio_button", "", micFromBottom, 1).SetState "On"
AIUtil.FindTextBlock("Order number").Click
AIUtil("text_box", "").SetText  Parameter("OrderNumber")
AIUtil.FindTextBlock("SEARCH").Click
AIUtil.FindTextBlock("OK").Click
