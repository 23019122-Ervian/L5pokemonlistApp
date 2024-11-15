import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, SectionList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const datasource = [
    {
        data: [
            { key: 'Muk', picture: require('./img/muk.png') },
            { key: 'Weezing', picture: require('./img/weezing.png') },
        ],
        title: "Dark",
        bgColor: 'purple',
        icon: "moon",
        color: "#000000"
    },
    {
        data: [
            { key: 'Hitmonchan', picture: require('./img/hitmonchan.png') },
            { key: 'Machop', picture: require('./img/machop.png') },
        ],
        title: "Fighting",
        bgColor: 'orange',
        icon: "hand-fist",
        color: "#704104"
    },
    {
        data: [
            { key: 'Venomoth', picture: require('./img/venomoth.png') },
            { key: 'Bulbasaur', picture: require('./img/bulbasaur.png') },
        ],
        title: "Grass",
        bgColor: 'green',
        icon: "leaf",
        color: "#73ec83"
    },
];

const styles = StyleSheet.create({
    opacityStyle: {
        borderWidth: 1,
        padding: "auto",
        marginVertical: 5,
        borderRadius: 5,
    },
    textStyle: {
        fontSize: 15,
        margin: 10,
        textAlign: 'center',
        flex: 1,
    },
    headerText: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10,
    },
    imageStyle: {
        width: 200,
        height: 200,
        resizeMode: 'contain'
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'skyblue',
        flex: 1,
        padding: "auto",
        height: 200,
    },
    button: {
        backgroundColor: 'dodgerblue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.opacityStyle}>
        <View style={styles.itemContainer}>
            <Text style={styles.textStyle}>{item.key}</Text>
            {item.picture && <Image source={item.picture} style={styles.imageStyle} />}
        </View>
    </TouchableOpacity>
);



const App = () => {

    return (
        <View style={{ marginBottom: 50, margin: 10 }}>
            <StatusBar hidden={true} />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>ADD POKEMON</Text>
            </TouchableOpacity>
            <SectionList
                sections={datasource}
                keyExtractor={(item) => item.key}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title, bgColor, icon, color } }) => (
                    <View style={[styles.headerContainer, { backgroundColor: bgColor }]}>
                        <Icon name={icon} size={20} color={color} />
                        <Text style={[styles.headerText, { color: color }]}>{title}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default App;
