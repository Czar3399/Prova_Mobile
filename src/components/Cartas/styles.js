import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', justifyContent:'space-between', padding:'10px',
        width: '95%',
        height: '250px',
        backgroundColor: 'green',
        borderRadius: '10px',
        marginBottom: '10px'
    },
    ImagemCarta: {
        width: '100%',
        height: '100%',
        padding: '80px',
    },
    viewDados: {
        width: '70%',
        padding: '20px'
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        paddingBottom:'20px'
    },
    descricao: {
        marginBottom: 10,
        color: 'white'
    },
    btnComprar:{
        borderRadius: 10
    }
});

export default styles;