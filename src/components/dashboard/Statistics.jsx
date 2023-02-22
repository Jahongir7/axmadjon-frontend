import { Icon } from "@iconify/react";
import classes from "../../assets/styles/Statistics.module.css";
import { PieChart } from "./PieChart";

const Statistics = () => {
    return (
        <div className={classes.Statistics}>
            <div className={classes.info}>
                <div className={classes.info_item}>
                    <div className={classes.number}>
                        <p>BINOLAR</p>
                        <b>5</b>
                    </div>
                    <div className={classes.icon}>
                        <Icon icon="mdi:building" />
                    </div>
                </div>
                <div className={classes.info_item}>
                    <div className={classes.number}>
                        <p>XARIDORLAR</p>
                        <b>120</b>
                    </div>
                    <div className={classes.icon}>
                        <Icon icon="mdi:building" />
                    </div>
                </div>
                <div className={classes.info_item}>
                    <div className={classes.number}>
                        <p>SOTILGAN UYLAR</p>
                        <b>75%</b>
                    </div>
                    <div className={classes.icon}>
                        <Icon icon="mdi:building" />
                    </div>
                </div>
                <div className={classes.info_item}>
                    <div className={classes.number}>
                        <p>BALANS</p>
                        <b>$ 1,000,000</b>
                    </div>
                    <div className={classes.icon}>
                        <Icon icon="mdi:building" />
                    </div>
                </div>
            </div>
            <div className={classes.pieChart}>
                <div className={classes.chartSection}>
                    <PieChart />
                </div>
                <div className={classes.chartInfo}>

                </div>
            </div>
        </div>
    );
}

export default Statistics;