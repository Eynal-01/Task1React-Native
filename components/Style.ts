import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer:{
    position:"relative",
    marginTop:"15%",
    width:"80%",
    marginLeft:"2%"
  },
  container: {
    flexDirection: "row",
    margin: 12,
  },
  content: {
    width: "73%",
    marginLeft: "3.7%",
    fontWeight:"400"
  },
  imageContainer: {
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    width: 60,
    height: 60,
    marginRight: 1,
    marginTop: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "700", // Corrected: fontWeight should be a string
    lineHeight: 19,
  },
  minute: {
    marginRight: "23%",
    color:"rgb(189, 189, 189)"
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    margin: 26,
    marginTop: 60,
    height: "7%",
  },
  searchbar: {
    width: 343,
    height: 50,
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgb(232, 232, 232)", // Equivalent to border: 1px solid rgb(232, 232, 232)
    borderRadius: 100, // Equivalent to border-radius: 100px
    backgroundColor: "rgb(246, 246, 246)", // Equivalent to background: rgb(246, 246, 246)
    padding: 10,
    color: "gray",
    paddingLeft: 20,
    left:"7%"
  },
  search: {
    marginTop: 60,
    position: "relative",
    width:343,
  },
  topContainer1: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    margin: 16,
  },
  back: {
    position: "absolute",
    fontSize: 16,
    fontWeight: "500",
    color: "rgb(93, 176, 117)",
    textAlign: "left",
    width: 38,
    height: 19,
    marginTop: 8,
  },
  filter: {
    marginTop: 8,
    position: "absolute",
    fontSize: 16,
    fontWeight: "500",
    color: "rgb(93, 176, 117)",
    textAlign: "right",
    left: "88%",
    width: 39,
    height: 19,
  },
  feed: {
    position: "absolute",
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    width: 71,
    height: 36,
    left: "40%",
  },
  blank:{
    position:"absolute",
    width:343,
    height:227.98,
    borderRadius:10,
    marginTop:"147%",
    backgroundColor:"rgb(240, 240, 240)",
    alignSelf:"center"
  },
  footer:{
    position:"absolute",
    width:"100%",
    height:83,
    backgroundColor:"rgb(250, 250, 250)",
    alignSelf:"center",
    marginTop:"190%"
  },
  icon:{
    position:"absolute",
    width:32,
    height:32,
    left:"8%",
    top:15,
    backgroundColor:"rgb(93, 176, 117)",
    borderRadius:100
  },
  icon1:{
    position:"absolute",
    width:32,
    height:32,
    left:"27%",
    top:15,
    backgroundColor:"rgb(232, 232, 232)",
    borderRadius:100
  },
  icon2:{
    position:"absolute",
    width:32,
    height:32,
    left:"46%",
    top:15,
    backgroundColor:"rgb(232, 232, 232)",
    borderRadius:100
  },
  icon3:{
    position:"absolute",
    width:32,
    height:32,
    left:"65%",
    top:15,
    backgroundColor:"rgb(232, 232, 232)",
    borderRadius:100
  },
  icon4:{
    position:"absolute",
    width:32,
    height:32,
    left:"85%",
    top:15,
    backgroundColor:"rgb(232, 232, 232)",
    borderRadius:100
  }
});
