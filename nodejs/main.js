'use strict';

const _ = require('underscore');
const Influx = require('influx');
const asyncRedis = require("async-redis");

async function test() {
  let influxdb = new Influx.InfluxDB({
    host: "influxdb",
    port: "8086",
    username: "",
    password: "",
    database: "test"
  });

  await influxdb.createDatabase('test');

  let redis = asyncRedis.createClient({host: 'redis'});

  let rValue = await redis.get('test');
  console.log('Old redis value', rValue);

  await redis.set('test', 100 * Math.random());

  await influxdb.writeMeasurement('one', [{tags: {}, fields:{
    field: 5000 * Math.random()
  }}]);

  let rawData = await influxdb.queryRaw(`SELECT * FROM "test"."autogen"."one" WHERE time > now() - 1h`);
  console.log('Influx value');
  console.log(rawData);
}

test();
