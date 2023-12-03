
import react,{Component} from "react";
class Table extends Component{
    render(){
    return(
<div>
    <table>
        <tr>
            <th>s.no</th>
            <th>name</th>
            <th>age</th>
        </tr>
        <tr>
            <td>1</td>
            <td>Mounika1</td>
            <td>20</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Mounika2</td>
            <td>20</td></tr>
            <tr>
                <td>3</td>
            <td>Mounika3</td>
            <td>22</td></tr>
    </table>
</div>
    )
}
}
export default Table