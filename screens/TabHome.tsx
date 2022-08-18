import React, { useState } from 'react';
import { FlatList, ListRenderItemInfo,StyleSheet, SafeAreaView, ScrollView, StatusBar ,
  RefreshControl,   Dimensions } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import { useWindowDimensions } from 'react-native';
import { TabBar, TabView, SceneMap } from 'react-native-tab-view';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const restaurantsP: any = [{
  name: 'Restaurant 1',
  address: 'Maputo, Rua Dr. Jaime Ribeiro Nº 10',
  phone: '123456789',
  image: 'https://picsum.photos/201',

},
{
  name: 'Restaurant 2',
  address: 'Maputo, Rua Dr. Jaime Ribeiro Nº 10',
  phone: '123456789',
  image: 'https://picsum.photos/202',

},
{
  name: 'Restaurant 3',
  address: 'Maputo, Rua Dr. Jaime Ribeiro Nº 10',
  phone: '123456789',
  image: 'https://picsum.photos/203',

}]

const restaurantsD: any = [{
  name: 'Restaurant 1',
  address: 'Maputo, Rua Dr. Jaime Ribeiro Nº 10',
  phone: '123456789',
  image: 'https://picsum.photos/700',

},
{
  name: 'Restaurant 2',
  address: 'Maputo, Rua Dr. Jaime Ribeiro Nº 10',
  phone: '123456789',
  image: 'https://picsum.photos/709',

},
{
  name: 'Restaurant 3',
  address: 'Maputo, Rua Dr. Jaime Ribeiro Nº 10',
  phone: '123456789',
  image: 'https://picsum.photos/701',

}, {
  name: 'Restaurant 4',
  address: 'Maputo, Rua Dr. Jaime Ribeiro Nº 10',
  phone: '123456789',
  image: 'https://picsum.photos/703',

}]


export default function TabHomeScreen({ navigation }: RootTabScreenProps<'TabHome'>) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  
  const [customers, setCustomers] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#000",
                }}
            />
        );
    };

    const Item = (id:string, title:string ) => (
        <View style={styles.item}>
            <Text style={styles.title} onPress={() => onPressClient(id)} >
                {title}
            </Text>
        </View>
    );

    const renderItem = ({ item }) => (
        <Item id={item.id} title={item.name} />
    );

    const onPressClient = (id:any) => {
        //navigation.navigate('CustomerDetails', { id });
    }

  return (
    <SafeAreaView
        style={[BaseStyle.safeAreaView]}
        edges={['right', 'top', 'left']}>

            <FlatList
            contentContainerStyle={{ paddingHorizontal: 20 }}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={true}
            refreshControl={
              <RefreshControl
                colors={[colors.primary]}
                tintColor={colors.primary}
                refreshing={refreshing}
                onRefresh={() => {}}
              />
            }
                data={customers}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                ItemSeparatorComponent={renderSeparator}
            />

            <View style={styles.footer}>
                <Text style={styles.footerText}> {customers.length} Clientes(s) Encontrados</Text>

                <RectButton style={styles.createButton} onPress={handlerNavigateToCreate}>
                    <Feather name="plus" size={20} color="#fff" ></Feather>
                </RectButton>
            </View>
        </SafeAreaView>



  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
