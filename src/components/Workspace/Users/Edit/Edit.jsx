import React from "react";
import styles from "./Edit.module.css";
import SaturnButton from "../../../common/SaturnButton/SaturnButton";
import SaturnInput from "../../../common/SaturnInput/SaturnInput";
import SaturnSelect from "../../../common/SaturnSelect/SaturnSelect";

class Edit extends React.Component {
    componentDidMount() {
        const params = new URLSearchParams(window.location.search)
        let pathId = params.get('id');
        this.props.initialize(pathId, this.props.currentUser);
    }

    render() {
        debugger;
        return (
            <div className={styles.body}>
                <div className={styles.header}>
                    <div>{`${this.props.currentUser.lastname ?? ''} ${this.props.currentUser.name ?? ''} ${this.props.currentUser.patronymic ?? ''}`} </div>
                    <div>
                        <SaturnButton value='Сохранить' onClick={() => {this.props.onSave();}} />
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.item}>
                        <div>
                            Фамилия:
                        </div>
                        <SaturnInput value={this.props.currentUser.lastname} onChange={this.props.onChangeLastname}/>
                    </div>
                    <div className={styles.item}>
                        <div>
                            Имя:
                        </div>
                        <SaturnInput value={ this.props.currentUser.name} onChange={this.props.onChangeName}/>
                    </div>
                    <div className={styles.item}>
                        <div>
                            Отчество:
                        </div>
                        <SaturnInput value={this.props.currentUser.patronymic} onChange={this.props.onChangePatronymic}/>
                    </div>
                    <div className={styles.item}>
                        <div>
                            Телефон:
                        </div>
                        <SaturnInput mask={'+7 (000) 000-00-00'} placeholder={'+7 (___) ___-__-__'} value={this.props.currentUser.phone} onChange={this.props.onChangePhone}/>
                    </div>
                    <div className={styles.item}>
                        <div>
                            Роль:
                        </div>
                        <SaturnSelect placeHolder={'Укажите роль'} options={this.props.items} selectedOption={this.props.currentUser.role} onSelect={this.props.onSelectRole} />
                    </div>
                    <div></div>
                    <div className={styles.item}>
                        <div>
                            Email:
                        </div>
                        <SaturnInput value={this.props.currentUser.email} onChange={this.props.onChangeEmail}/>
                    </div>
                    <div className={styles.item}>
                        <div>
                            Пароль:
                        </div>
                        <SaturnInput autoComplete={'new-password'} isSecret value={this.props.currentUser.password ?? ''} onChange={this.props.onChangePassword}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Edit;