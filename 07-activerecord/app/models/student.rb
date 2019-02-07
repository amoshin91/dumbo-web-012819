class Student < ActiveRecord::Base
  # INITIALIZE IS GONE

  def full_name
    "#{first_name} #{last_name}"
  end

  def self.all_names
    Student.all.map do |student|
      student.full_name
    end
  end
end
