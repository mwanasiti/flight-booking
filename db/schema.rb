# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_10_13_213131) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "flights", force: :cascade do |t|
    t.string "flight_date"
    t.string "airline"
    t.string "airline_image"
    t.string "from"
    t.string "to"
    t.integer "seats"
    t.integer "cost"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_flights", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "flight_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["flight_id"], name: "index_user_flights_on_flight_id"
    t.index ["user_id"], name: "index_user_flights_on_user_id"
  end

  create_table "user_profiles", force: :cascade do |t|
    t.string "name"
    t.string "mail"
    t.integer "mobile"
    t.integer "id_passport"
    t.string "gender"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_user_profiles_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "user_flights", "flights"
  add_foreign_key "user_flights", "users"
  add_foreign_key "user_profiles", "users"
end
