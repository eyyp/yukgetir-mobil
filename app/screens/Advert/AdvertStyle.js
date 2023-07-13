/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F6FB',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rightIconsContainer: {
    witdh: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerButton: {
    alignItems: 'center',
    margin: 5,
  },
  rightIcons: {
    fontSize: 12,
    fontWeight: '400',
  },
  search: {
    flexDirection: 'row',
    padding: 20,
    height: 45,
    witdh: '100%',
    paddingVertical: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 5,
  },
  searchInput: {
    fontSize: 16,
    fontWeight: '400',
    width: '73%',
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
    marginTop: 5,
  },
  currentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    alignItems: 'center',
  },
  currentList: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
    marginTop: 5,
  },
  seeAll: {
    fontSize: 12,
    fontWeight: '400',
    color: '#0069B4',
    marginTop: 5,
  },
  filter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  filterButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    width: '49%',
  },
  filterText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#868A9A',
    marginTop: 5,
  },
  selectRow:{
    marginTop:5,
    flexWrap:"wrap"
  },
  selected:{
      backgroundColor:'white',
      alignItems:'center',
      borderRadius:5,
      flexDirection:'row',
      marginRight:5,
  },
  selectedText:{
      margin:5,
      lineHeight:14,
      fontSize:14,
  },
  selectedIcon:{
      alignSelf:'center',
      marginRight:5
  },
  down:{
      alignSelf:'flex-end',
      marginLeft:10
  },
  clearSelected:{
      backgroundColor:'#EBEBEB',
      alignItems:'center',
      borderRadius:5,
      flexDirection:'row',
      marginRight:5,
  },
  selectedBar:{
      height:30
  },
});