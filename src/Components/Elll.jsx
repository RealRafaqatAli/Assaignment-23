export default function Elll() {
  return (
    <>
      <h1>STUDENT REGISTRATION FORM</h1>

      <form>
        <table border="1" cellPadding="8">

          <tbody>
            <tr>
              <td>FIRST NAME</td>
              <td>
                <input type="text" /> (max 30 characters a-z and A-Z)
              </td>
            </tr>

            <tr>
              <td>LAST NAME</td>
              <td>
                <input type="text" /> (max 30 characters a-z and A-Z)
              </td>
            </tr>

            <tr>
              <td>DATE OF BIRTH</td>
              <td>
                <select>
                  <option>Day</option>
                  <option>1</option>
                  <option>2</option>
                </select>

                <select>
                  <option>Month</option>
                  <option>January</option>
                  <option>February</option>
                </select>

                <select>
                  <option>Year</option>
                  <option>2003</option>
                  <option>2004</option>
                </select>
              </td>
            </tr>

            <tr>
              <td>EMAIL ID</td>
              <td><input type="email" /></td>
            </tr>

            <tr>
              <td>MOBILE NUMBER</td>
              <td>
                <input type="text" /> (10 digit number)
              </td>
            </tr>

            <tr>
              <td>GENDER</td>
              <td>
                Male <input type="radio" name="gender" />
                Female <input type="radio" name="gender" />
              </td>
            </tr>

            <tr>
              <td>ADDRESS</td>
              <td>
                <textarea cols="40" rows="5"></textarea>
              </td>
            </tr>

            <tr>
              <td>CITY</td>
              <td>
                <input type="text" /> (max 30 characters)
              </td>
            </tr>

            <tr>
              <td>PIN CODE</td>
              <td>
                <input type="text" /> (6 digit number)
              </td>
            </tr>

            <tr>
              <td>STATE</td>
              <td>
                <input type="text" /> (max 30 characters)
              </td>
            </tr>

            <tr>
              <td>COUNTRY</td>
              <td><input type="text" /></td>
            </tr>

            <tr>
              <td>HOBBIES</td>
              <td>
                Drawing <input type="checkbox" />
                Singing <input type="checkbox" />
                Dancing <input type="checkbox" />
                Sketching <input type="checkbox" />
                <br />
                Others <input type="checkbox" /> <input type="text" />
              </td>
            </tr>
          </tbody>
        </table>

        <br />

        {/* Qualification Table */}
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>Sl.No.</th>
              <th>Examination</th>
              <th>Board</th>
              <th>Percentage</th>
              <th>Year</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Class X</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td>2</td>
              <td>Class XII</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td>3</td>
              <td>Graduation</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td>4</td>
              <td>Masters</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <br />

        {/* Courses */}
        <h3>COURSES APPLIED FOR</h3>
        BCA <input type="checkbox" />
        B.Com <input type="checkbox" />
        B.Sc <input type="checkbox" />
        B.A <input type="checkbox" />

        <br /><br />

        <button type="submit">Submit</button>
        <button type="reset">Reset</button>

      </form>
    </>
  );
}