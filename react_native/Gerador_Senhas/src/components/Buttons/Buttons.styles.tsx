import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 100,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',    
  },
  Button: { 
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 1,
    
  },
  ButtonsContainer: {
    flexDirection: 'column',
    width: 300,
    height: 120,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});