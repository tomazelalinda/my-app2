import { StyleSheet, Text, View } from 'react-native';

const CardCidade = ({ nome, uf }) => {
    return (
        <View style={style.card}>
            <Text style={style.cidade}>{nome}</Text>
            <Text> - </Text>
            <Text style={style.uf}>{uf}</Text>
        </View>
    );
};

export default CardCidade;

const style = StyleSheet.create({
    card: {
        width: 'auto', 
        padding: 10, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFD1DC', // Um tom suave de rosa claro
        borderBottomStyle: "solid", 
        borderBottomWidth: 0.3, 
        borderBottomColor: '#F06292' // Rosa mais vibrante para a borda
    },

    cidade: {
        fontSize: 18, 
        color: '#D81B60', // Um tom de rosa mais forte
        fontWeight: '600'
    },

    uf: {
        fontSize: 18, 
        color: '#F50057', // Outro tom de rosa, mais vibrante
        fontWeight: '900'
    }
});
